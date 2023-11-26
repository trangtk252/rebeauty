export default function Page() {
    return (
        <div className="mt-40 flex justify-center items-center">
                <form className="bg-[#fceeed] w-10/12 p-12 text-[#7d7d82] mb-20" action="/rebeauty" method="post">
                    <div className="flex flex-col justify-start">
                        <h2 className="text-2xl font-bold">Write Your Review</h2>

                        <fieldset className="rating w-[230px]">
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
                        <p className="pb-6">
                            Click on a star to change your rating 1 - 5, where 5 = great! and 1 = really bad
                        </p>
                        <p>Your Review:</p>
                        <div className="form-group ">
                            <textarea className="form-control w-full" rows="10" placeholder="Add your review" name="review"
                                      id="review"></textarea>
                        </div>
                        <p className="flex justify-end">999 Characters remaining</p>
                        </div>

                    <p className="text-xl pb-4">Your Info:</p>

                    <p>Name:</p>
                    <div className="form-group">
                        <input className="form-control w-full"  placeholder="Name" name="name" />
                    </div>
                    <p>Age:</p>
                    <div className="form-group">
                        <input className="form-control w-full" type="text" placeholder="Age" name="age" id="age" />
                    </div>
                    <p>Email:</p>

                    <div className="form-group">
                        <input className="form-control w-full" type="email" placeholder="Email" name="email" id="email"
                               />
                    </div>
                    <div id="review-form">
                    <input type="submit" name="" value="Submit"/>
                    </div>
                    <p id="submitInfo" className="help-block">
                        By clicking <strong>Submit</strong>, I authorize the sharing of my name and review on the web. (Email will not be shared)
                      </p>
                </form>
        </div>
)
}