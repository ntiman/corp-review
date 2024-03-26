import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
      <button>
        <TriangleUpIcon/>
        <span>531</span>
      </button>
      <div>
        <p><b>B</b></p>
      </div>
      <div>
        <p>Apple</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis similique ab quasi deserunt! Molestiae, fuga.</p>
      </div>
      <p>4d</p>
      </li>
    </ol>
  )
}