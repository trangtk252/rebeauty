export default function Page() {
    return (
        <section>
            <div className="container">
                <form id="review-form" action="index.html" method="post">
                    <h2>Write Your Review</h2>

                    <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" value="5"/><label className="full" htmlFor="star5"
                                                                                       title="Awesome - 5 stars"></label>
                        <input type="radio" id="star4half" name="rating" value="4 and a half"/><label className="half"
                                                                                                      htmlFor="star4half"
                                                                                                      title="Pretty good - 4.5 stars"></label>
                        <input type="radio" id="star4" name="rating" value="4"/><label className="full" htmlFor="star4"
                                                                                       title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star3half" name="rating" value="3 and a half"/><label className="half"
                                                                                                      htmlFor="star3half"
                                                                                                      title="Meh - 3.5 stars"></label>
                        <input type="radio" id="star3" name="rating" value="3"/><label className="full" htmlFor="star3"
                                                                                       title="Meh - 3 stars"></label>
                        <input type="radio" id="star2half" name="rating" value="2 and a half"/><label className="half"
                                                                                                      htmlFor="star2half"
                                                                                                      title="Kinda bad - 2.5 stars"></label>
                        <input type="radio" id="star2" name="rating" value="2"/><label className="full" htmlFor="star2"
                                                                                       title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star1half" name="rating" value="1 and a half"/><label className="half"
                                                                                                      htmlFor="star1half"
                                                                                                      title="Meh - 1.5 stars"></label>
                        <input type="radio" id="star1" name="rating" value="1"/><label className="full" htmlFor="star1"
                                                                                       title="Sucks big time - 1 star"></label>
                        <input type="radio" id="starhalf" name="rating" value="half"/><label className="half"
                                                                                             htmlFor="starhalf"
                                                                                             title="Sucks big time - 0.5 stars"></label>
                    </fieldset>
                    <span id="starsInfo" className="help-block">
    Click on a star to change your rating 1 - 5, where 5 = great! and 1 = really bad
  </span>

                    <div className="form-group">
                        <label className="control-label" htmlFor="review">Your Review:</label>
                        <textarea className="form-control" rows="10" placeholder="Add your review" name="review"
                                  id="review"></textarea>
                        <span id="reviewInfo" className="help-block pull-right">
      <span id="remaining">999</span> Characters remaining
    </span>
                    </div>

                    <h3>Your Info:</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" type="text" placeholder="Name" name="name" id="name" value=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input className="form-control" type="text" placeholder="Age" name="age" id="age" value=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input className="form-control" type="email" placeholder="Email" name="email" id="email"
                               value=""/>
                    </div>
                    <input type="submit" name="" value="Submit"/>
                    <span id="submitInfo" className="help-block">
    By clicking <strong>Submit</strong>, I authorize the sharing of my name and review on the web. (Email will not be shared)
  </span>
                </form>
            </div>
        </section>
)
}