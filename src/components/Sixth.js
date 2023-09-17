import React from 'react'
import './Sixth.css';
function sixth() {
  return (
    <>
      <h1 className='Sixth_page_heading'><b>Frequently Asked Questions</b></h1>
        <div className='all_questions'>



      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
          What is Netflix?
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
          <div className='card card-body'>
          Netflix is a streaming service that offers a wire variety of awards-winnnin
          TV shows, movies, amine, documentaries and more - on thousands of internet connected devices.<br/>
          You can watch as much as you want, whenever you want, without a single ad-
          all for one low monthly price.There's always something new to discover, and
          new TV shows and movies are added every week!
        </div>
      </div>



      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
          How much does Netflix cost?
        </button>
      </p>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body">
          Watch Netflix on your smartphone, tablet, smart TV,laptop, or streaming device, all for one fixed monthly
          fee.Plans range from $149 to $649 a month. NO extra costs, no contracts.
        </div>
      </div>



      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
          Where can I watch?
        </button>
      </p>
      <div className="collapse" id="collapseExample3">
        <div className="card card-body">
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </div>
      </div>



      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
          How do I cancel?
        </button>
      </p>
      <div className="collapse" id="collapseExample4">
        <div className="card card-body">
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </div>
      </div>




      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
          What can I watch on Netflix?
        </button>
      </p>
      <div className="collapse" id="collapseExample5">
        <div className="card card-body">
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </div>
      </div>





      <p className="d-flex my-1">
        <button className="sumit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
          Is Netflix good for kids?
        </button>
      </p>
      <div className="collapse" id="collapseExample6">
        <div className="card card-body">
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </div>
      </div>


      </div>

        <div  className='Sixth_page_last'>
        <h5 className='sixth_page_last_heading'> Ready to watch? Enter your email to create or restart your membership.</h5>

        <input type="text" id="name" placeholder='Email Address'></input>
        <a href="Second"><button className='button'>Get Started</button></a>
        </div>
        <p id="neglect">last page</p>
        <div className='Sixth_page_last_content'></div>

    </>
  )
}

export default sixth
