export const Accordion = () => {
  return (
    <>
      <div className="collapse collapse-arrow border-2 border-gray-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content text-2xl">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-gray-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </>
  )
}
