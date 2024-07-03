"use client"
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useParams, useRouter } from 'next/navigation';
import { getLevelQuestions } from '@/app/actions/getLevelQuestions';
import { saveAnswer } from '@/app/actions/saveAnswer';
import { getSaveAnswer } from '@/app/actions/getSaveAnswer';
import { saveUserNewPointandLevel } from '@/app/actions/saveUserNewPointandLevel';

type User = {
    kode: string;
    name: string;
    points: number;
    level: number;
}

type Question = {
    id: number;
    question: string;
    answers: string[];
    correct_answer: string;
    points: number;
};

const LevelPage: React.FC = () => {
    const { user, updateUserPointsandLevel } = useAuth();
    const params = useParams();
    const level = params.number;

    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

    const fetchLevelQuestions = async () => {
        setIsLoading(true);
        try {
            const response = await getLevelQuestions(Number(level));
            setQuestions(response as Question[]);
            fetchAnswer(0);

        } catch (error) {
            console.error('Error fetching level questions or saved answers:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAnswer = async (questionIndex: number) => {
        setIsLoading(true)
        const savedAnswerResponse = await getSaveAnswer(user?.kode as string) as any;
        if (savedAnswerResponse) {
            const savedAnswers = savedAnswerResponse.reduce((arr: { [key: number]: string }, answer: { question_id: number, selected_answer: string }) => {
                arr[answer.question_id] = answer.selected_answer;
                return arr;
            }, {});

            setSelectedAnswers(savedAnswers);
            setSelectedAnswer(savedAnswers[questionIndex + 1] || "");
            setIsLoading(false)
        }
    };



    useEffect(() => {
        if (level) {
            fetchLevelQuestions();
        }
    }, [level, user?.kode]);

    const handleNextQuestion = async () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            fetchAnswer(currentQuestionIndex + 1);
        } else {
            let newScore = 0;
            questions.forEach((question) => {
                if (selectedAnswers[question.id] === question.correct_answer) {
                    newScore += question.points;
                }
            });
            await saveUserNewPointandLevel(user?.kode as string, newScore,user?.level+1);
            updateUserPointsandLevel(newScore);
            router.push("/home");
        }
    };

    const handleSelectAnswer = async (answer: string) => {
        setSelectedAnswer(answer);

        try {
            await saveAnswer(user?.kode as string, questions[currentQuestionIndex].id, answer);
        } catch (error) {
            console.error('Failed to save answer:', error);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex === 0) {
            router.push('/home');
        } else {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            fetchAnswer(currentQuestionIndex - 1);
            setSelectedAnswer(selectedAnswers[questions[currentQuestionIndex - 1]?.id] || "");
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-purple-50 p-4 ">
            <div className="bg-white-100 rounded-lg  p-3 mb-4" style={{ borderTop: '12px solid #6739ba' }}>
                <h1 className="text-2xl text-black-100 font-bold mb-2">Level {level}</h1>
                <p className="text-[#fc3030]">* Menunjukkan Pertanyaan yang wajib diisi</p>
            </div>
            <div className="relative bg-white-100 rounded-lg py-6">
                <div className="absolute top-0 left-0 w-full bg-purple-primary py-2 rounded-t-lg">
                    {isLoading ? (
                        <p className="text-white-100 text-left pl-4 font-normal"></p>
                    ) : (
                        <p className="text-white-100 text-left pl-4 font-normal">{currentQuestionIndex + 1}/{questions.length}</p>
                    )}
                </div>
                <div className="p-4 py-8">
                    {isLoading ? (
                        <div className="flex w-full items-center justify-center h-full bg-white">
                            <span className="loading loading-dots loading-lg bg-purple-primary"></span>

                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between">
                                <div className="w-4/5 break-words">
                                    <p className="text-md text-black-100">
                                        {currentQuestionIndex + 1}. {currentQuestion?.question}
                                        <span className="text-[#fc3030]">*</span>
                                    </p>
                                </div>
                                <p className="text-md text-grey-200">{currentQuestion?.points} Poin</p>
                            </div>

                            {/* Radio Inputs */}
                            <div className="flex flex-col gap-8 mt-4">
                                {currentQuestion?.answers.map((answer, index) => (
                                    <label key={index} className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={answer}
                                            className="mr-2 h-6 w-6 rounded-full"
                                            checked={selectedAnswer === answer}
                                            onChange={() => handleSelectAnswer(answer)}
                                        />
                                        <span className='text-black-100'>{answer}</span>
                                    </label>
                                ))}
                            </div>
                        </>
                    )}
                </div>


            </div>
            <div className="flex flex-row gap-4 justify-center items-center mt-6">
                <button
                    className="bg-white-100 text-purple-primary font-normal rounded-lg text-xl py-3 px-3 shadow-lg shadow-[#b5b2bd] w-full max-w-[185px] sm:max-w-[185px] md:max-w-[175px] lg:max-w-[225px] xl:max-w-[275px]  "
                    onClick={handleBack}
                >
                    Kembali
                </button>
                <button
                    className="bg-white-100 text-purple-primary font-normal rounded-lg text-xl py-3 px-3 shadow-lg shadow-[#b5b2bd] w-full max-w-[185px] sm:max-w-[185px] md:max-w-[175px] lg:max-w-[225px] xl:max-w-[275px]  "
                    onClick={handleNextQuestion}
                >
                    Berikutnya
                </button>
            </div>
        </div>
    );
}

export default LevelPage;
