"use client";
import React from "react";
import { PetSvg } from "@/app/components/PetSvg";
import { getResponseAi } from "@/app/lib/aiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  name: string;
};

export default function PetAi({ name }: Props) {
  const [response, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function getResponse(question: string) {
    const responseAi = await getResponseAi(question);
    setResponse(responseAi ?? "");
  }

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const form = event.currentTarget.form;
      if (!form) return;

      const formData = new FormData(form);
      const question = formData.get("question")?.toString().trim() ?? "";

      if (!question) return;

      setIsLoading(true);
      try {
        await getResponse(question);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-center mb-4 max-w-1/2 mx-auto">
        <div className="w-48 h-60">
          <PetSvg />
        </div>
      </div>

      <div className="flex flex-col">
        {/* Form Question  */}
        <form>
          <label htmlFor="question" className=" mb-2 text-sm font-medium">
            Ask me about {name}!
          </label>
          <textarea
            id="question"
            name="question"
            rows={2}
            className={`p-2.5 w-full text-sm rounded-lg border border-gray-neutro/10
              focus:ring-2 focus:ring-rose-sand hover:border-rose-sand focus:outline-none
               ${
                 isLoading
                   ? "disable cursor-progress bg-gray-neutro/10"
                   : "bg-white"
               } `}
            placeholder="Where she study?"
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          ></textarea>
        </form>
        {/*  Answer */}
        <div
          className="h-32 overflow-y-auto mt-4 max-h-200 text-sm"
          aria-live="polite"
        >
          <ReactMarkdown children={response} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}
