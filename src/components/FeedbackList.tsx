import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import { AFeedbackItem } from "../lib/types";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItmes, setFeedbackItems] = useState<AFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFeedbakcItems = async () => {
      setIsLoading(true);
      try{
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(`An error occurred. Please try again later.`);
      setIsLoading(false);
    }
    };
    fetchFeedbakcItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner /> }
      {errorMessage && <ErrorMessage message={errorMessage} /> }
      {feedbackItmes.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
