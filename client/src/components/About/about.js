import React from "react";
import "./style.css";

function About() {
  return (
    <div id="about" className="flex-container">
    
       
      <div>Here is the high level version of my idea.

So the idea is that you would have a user login…they would have a neighborhood associated with their account. (This takes care of the user auth requirement of the project).
Then in your neighborhood you have different sections. Like a classifieds  section (basically craigslist…things for sale, services etc). A section for upcoming neighborhood events ( like HOA meetings, block parties, yard sales etc).
Each user can comment on other posts in Block Parties and HOA meetings (other events) along with the classifieds. The difference for classifieds is that you could also have the bidding system like we went over in class a while back. (edited)
There is room for expansion and integration of other ideas here.
And the idea is that in the real world your neighborhood would register on the site.

<section>
<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Find your neighborhood!</a>

</section>

</div>
    </div>
    
  );
}

export default About;