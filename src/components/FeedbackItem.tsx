import { TriangleUpIcon } from "@radix-ui/react-icons";
import { AFeedbackItem  } from "../lib/types";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: AFeedbackItem;
}) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>
          <b>B</b>
        </p>
      </div>
      <div>
        <p>Apple</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          similique ab quasi deserunt! Molestiae, fuga.
        </p>
      </div>
      <p>4d</p>
    </li>
  );
}
