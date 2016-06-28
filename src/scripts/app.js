const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {
    var HomeView = React.createClass ({
        render: function () {
            return (
                <div id = 'container'>
                    <Top />
                    <Middle />
                </div>
                    )
        }
    })

    var Top = React.createClass ({
        render: function () {
            return (
                <div className = 'top'>
                    <img id = "skyline" src = "http://magentanova.github.io/html-intro-1/images/houston.jpg" />
                    <img id = "logo" src = "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
                </div>
                )
        }
    })

    var Middle = React.createClass ({
        render: function() {
            return (
                <div className = 'middle'>
                    <LeftCol />
                    <RightCol />
                </div>
                )
        }
    })

    var LeftCol = React.createClass ({
        render: function () {
            return (
                <div className = "leftCol">
                    <h3 className = "black">THE IRON YARD | HOUSTON</h3>
                    <p>Happenings and updates from The Iron Yard in Houston, TX</p>
                    <hr />
                    <h3>SEARCH</h3>
                    <div className = "box">
                        <p>Search Keywords</p>
                     </div>
                </div>
                )
        }
    })

    var RightCol = React.createClass ({
        render: function () {
            return (
                <div className = 'rightCol'>
                    <h1 className = 'black'> September 22 Starts a New Class of The Iron Yard Houston </h1>
                    <p><i>by Brian Dorton, Campus  Director of <a href="https://www.theironyard.com/locations/houston.html">The Iron Yard</a> Houston</i></p>
                    <img id = 'classroom' src = 'http://magentanova.github.io/html-intro-1/images/classroom.jpg' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint alias repudiandae ratione, dolores laudantium, eaque obcaecati nam iusto quia ad, commodi mollitia maiores fuga illo eveniet sequi voluptatum dolorem veniam.</p>
                    <div id = 'posting'>
                        <div className = 'boxPosting' id = 'topBox'>
                            <p className = 'back'><strong>Never miss a post!</strong></p>
                        </div>
                        <div className = 'boxPosting' id = 'bottomBox'>
                            <img src = 'http://magentanova.github.io/html-intro-1/images/ironyardlogo.png' />
                            <div id = 'insideBox'>
                            <p className = 'black'><strong>tiyhouston</strong></p>
                            <p>The Iron Yard | Houston</p>
                        </div>
                        <div id = 'follow'>
                            + Follow
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    })

    // var Middle = React.createClass ({
    //     render: function () {
    //         return (
    //             <div class="middle">
    //                 <div class = "leftCol">
    //                     <h3 class = "black">THE IRON YARD | HOUSTON</h3>
    //                     <p>Happenings and updates from The Iron Yard in Houston, TX</p>
    //                     <hr />
    //                     <h3>SEARCH</h3>
    //                     <div class="box">
    //                         <p>Search Keywords</p>
    //                     </div>
    //                 </div>
    //                 <div class = "rightCol">
    //                     <h1 class = "black">September 22 Starts a New Class of The Iron Yard Houston</h1>
    //                     <p><i>by Brian Dorton, Campus Director of <a href="https://www.theironyard.com/locations/houston.html">The Iron Yard</a> Houston</i></p>
    //                     <img id = "classroom" src = "http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint alias repudiandae ratione, dolores laudantium, eaque obcaecati nam iusto quia ad, commodi mollitia maiores fuga illo eveniet sequi voluptatum dolorem veniam.</p>
    //                     <div id = "posting">
    //                         <div class = "boxPosting" id = "topBox">
    //                             <p class = "black"><strong>Never miss a post!</strong></p>
    //                     </div>
    //                     <div class = "boxPosting" id = "bottomBox">
    //                         <img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
    //                         <div id="insideBox">
    //                             <p class="black"><strong>tiyhouston</strong></p>
    //                             <p>The Iron Yard | Houston</p>
    //                         </div>
    //                         <div id="follow">
    //                             +   Follow
    //                         </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               )
    //     }
    // })
    ReactDOM.render(<HomeView/>,document.querySelector('.container'))
}

app()