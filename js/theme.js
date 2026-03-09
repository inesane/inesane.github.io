;(function($){
    "use strict"

	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();

	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
       
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
       
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
	

})(jQuery)

let project_descriptions = {
    "classroom" : `Developed a VR classroom environment supporting up to 16 users. <br><br>Implemented features such as voice chat, real-time interaction with peers, presentation sharing, and an external React whiteboard app. <br><br>Tested and optimized to run seamlessly on both Android mobile devices and VR headsets.`,
    "job-portal": `A job searching portal, with separate views for recruiters and applicants, complete with database and authentication functionalities.`,
    "turing": `Created an E-Magazine with Computer Science and Algorithms related articles as part of a team of 10. <br><br>Contributed articles and insights on topics such as the basics of Machine Learning and its applications in Dating, Gaming Bots, and the advent of GANs, Algorithmic Trading and Quantum Computing.`,
    "movie": `Built a Movie Recommender System similar to Netﬂix, utilizing factors like actors, genre, and by extracting semantic information from plot summaries using BERT. <br><br>Incorporated user-speciﬁc recommendations based on their previous reviews, enhancing personalization and relevance.`,
    "discord": `Developed a discord bot to manage transactions by 20 organizers for 71 participants for a college event <br><br>The bot was created using Discord.py and connected to sqlite for data storage, hosted and used in the event server with options to view the scoreboard, change scores, view history etc.`,
    "dbms": ` Collaborated on a MySQL Database Management System with Python User Interface used to perform CRUD operations on a restaurant database. <br><br>Contains multiple in-built queries to access and filter through customer feedback data.`,
    "linux": `Developed a custom CLI based on Linux Shell, implementing several commonly-used commands such as ls and history. <br><br>Supports multiple commands per line, signal handling, foreground/background processes, chained redirection and piping.`,
    "lenet": `Built LeNet-5 from scratch without any external libraries other than NumPy. <br><br>Implemented the entire Convolutional Neural Network according to the paper's specifications and created a GUI for testing the neural network.`,
    "heibi": `A scalable Flutter-based College Convenience Mobile application, linked with Firebase for data storage and easy access. <br><br> The app aims to make day to day functions for college student easier by monitoring and providing real time status updates about college amenities such as cafeterias, washing machines and sports facilities.`,
    "joystick": `Recreated the popular game 'Pac-Man' using the characters from the game 'Among Us' in OpenGL. <br><br>Implemented the Bellman Ford shortest path algorithm for the computer opponent to move towards the player's character.`,
    "brick": `Created a terminal-based version of the game 'Breakout' from scratch in python, using no libraries other than numpy and colorama. <br><br>Implemented multiple levels, boss character, various catchable power-ups, etc... <br><br>Made use of several Object Oriented Programming Concepts such as Inheritance, Polymorphism, Encapsulation and Abstraction.`,
    "plane": `Rendered and animated multiple 3D solids and recreated the game 'Sky Force' in WebGL. <br><br>Created an animated trailer in Blender with the same 3D solids used in the game.`,
    "os": `Implemented multiple scheduling algorithms, namely FCFS, PBS and MLFQ, in MIT's xv6 operating system in order to maximize throughput.`,
    "socket": `Established a socket connection between a client and server to facilitate file transfer between the two. <br><br>Made failsafes for several cases such as when read/write permissions are not available.`,
    "website": `Code for this website! <br><br>Coded based on a colorlib template and a combination of multiple codepens and hosted using GitHub pages.`,
    "tcav": `Built on TCAV, an ML paper that aims to find a link between recognizing an object and how important a certain feature is to that objects detection. <br><br>Implemented baseline TCAV model and attempted to extend this idea in multiple manners including detecting medical conditions such as arthritis using the presence of bone spurs.`,
    "raytracing": `Implemented a ray tracing renderer capable of simulating realistic lighting and material interactions in 3D scenes. <br><br>Rendered diffuse, reflective and transparent objects and optimized rendering using bounding volume hierarchies (BVH).`,
    "workout": `Data merger for workout app data (Lyfta, Strong, etc) and Garmin heart-rate activity files. <br><br>Provides set-level insights like HR curves, averages, peaks, and a complete workout timeline.`,
    "investment": `A local, self-hosted investment portfolio tracker that doesn't store or sell your financial data. <br><br>Track stocks, mutual funds, commodities, crypto, PF, FDs with live prices and historical charts.`
}


function henlo(txt, img){
    Swal.fire({
            html: txt,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false,
            imageUrl: img
        }
    )
}

function generateHtml(title, tech, img, gh = "#", lnk = "#"){
    let final = ""
    let gh_shiz = ""
    let lnk_shiz = ""
    let social_shiz = ""

    if(gh != "#"){
        gh_shiz = `<a href="` + gh + `"><i class="fa fa-github fa-2x"></i></a>`
    }
    if(lnk != "#"){
        lnk_shiz = `<a href="` + lnk + `"><i class="fa fa-link fa-2x"></i></a>`
    }

    if(lnk_shiz != "" || gh_shiz != ""){
        social_shiz = `<div class="social_icon">
        ` + gh_shiz + `
        ` + lnk_shiz + `
        </div>`;
    }

    final = `
            <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget author_widget">
                    <!--<img class="author_img rounded-circle popup-img" src="img/gallery/` + img + `.png" alt="">-->
                    <h4>` + title + `</h4>
                    <p>` + tech + `</p>
                    ` + social_shiz + `
                    <p>` + project_descriptions[img] + `</p>
                    <div class="br"></div>
                </aside>
            </div>`

    img = "img/gallery/" + img + ".png"


    henlo(final, img)
}
