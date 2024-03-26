export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedbach-textarea" placeholder="blabla" spellCheck={false}></textarea>

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">150</p>
        <button type="submit" className=""><span>Submit</span></button>
      </div>

    </form>
  )
}