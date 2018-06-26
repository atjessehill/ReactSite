import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';


class App extends Component {
  render() {
    return (
      <span>
      <header>
      <h1> The coolest blog in all the land </h1>
      </header>

      <div class="row">
          <div class="column" id="left-col">
            <h1>Recent Posts!</h1>
            <div class="post">
              <h1 class="title"> Starting a new job </h1>
              <h6> 6/25/2018 </h6>
              <p>
                Today was the first day of my new internship at a startup accelerator called Numa.
                Numa is a french company that is expanding to the US, and they want to help
                foreign startups enter the US market in New York. It's my first time working with
                startups like this, so i'm very excited.
                </p>
            </div>
            <div class="post">
              <h1 class="title"> Got a new dog today!</h1>
              <h6> 6/01/2018 </h6>
              <p>
                My sister brought home a little french bulldog last week. Her name is rosie, and she's very sweet.
                At first our other family dog Fairbelle (we call her puppy) was upset, but now they get along just fine.
                It's the first time I've ever had a small dog as a pet, but rosie has grown on me a lot, and I'll miss her when I go back to school.
                </p>
            </div>
            <div class="post">
              <h1 class="title"> My first week back </h1>
              <h6> 5/22/2018 </h6>
              <p>
                It's been a week since I got home from school. It's funny being away for 6 months from home, it's very easy to notice all of the little differnces in the house and your family.
                My brother who is almost 16 years old is ALMOST taller than me, I think I still have a quarter of an inch on him. I know by the winter when I come back he'll be taller than me.
                It is nice to be back, it's great to hangout with my family and reconnect with friends. I'm looking forward to what I do this summer :)
                </p>
            </div>
          </div>
          <div class="column" id="right-col">
            <nav>
            <p>
              This is the right nav bar. It's a pretty nice nav bar if you ask me.

            </p>
            </nav>

          </div>

      </div>
      <footer>
      Copyright © Jesse@hill.com
      </footer>

      </span>
    );
  }
}

export default App;
