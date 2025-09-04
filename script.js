function HomeAnimation() {
    gsap.set(".sliders", {
        scale: 2,
    })


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "+=1500",
            scrub: 2,
            pin: true,
        },

    })

    tl
        .to(".video", {
            "--clip": "0%",
            ease: "power5.out",
        }, 'a')

        .to(".sliders", {
            scale: 1.5,
            ease: "power2.out",
        }, 'a')

        .to(".lt", {
            xPercent: -15,
            ease: "power3.out",
            // duration: 10,
        }, 'b')

        .to(".rt", {
            xPercent: 15,
            ease: "power3.out",
            // duration: 10,
        }, 'b')
}
HomeAnimation();

function slideAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".page-3",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -315,
        ease: "power3",
        pin:true
    })
}
slideAnimation();

function teamAnimation() {
  document.querySelectorAll(".listitems").forEach(function (elems) {
    const picture = elems.querySelector(".picture");
    const blue = elems.querySelector(".blue");

    // Ab sabhi text (roman + name + right side text) select karenge
    const texts = elems.querySelectorAll(".left h3, .left h1, .listitems > .relative > h3");

    elems.addEventListener("mouseenter", function () {
      gsap.to(blue, {
        height: "100%",
        backgroundColor: "#111", // light black instead of blue
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(picture, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scale: 1.2,
      });

      gsap.to(texts, {
        color: "#ffffff", // sab white ho jayenge including Roman numbers
        fontWeight: 500,
        duration: 0.4,
        ease: "power3.inOut",
      });
    });

    elems.addEventListener("mousemove", function (dets) {
      gsap.to(picture, {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 400, dets.clientX),
        y: gsap.utils.mapRange(0, window.innerHeight, -200, 400, dets.clientY),
        rotation: gsap.utils.mapRange(0, window.innerWidth, -20, 20, dets.clientX),
        duration: 0.3,
      });
    });

    elems.addEventListener("mouseleave", function () {
      gsap.to(blue, {
        height: "0%",
        backgroundColor: "#111", // stays consistent
        duration: 0.8,
        ease: "power3.in",
      });

      gsap.to(picture, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
      });

      gsap.to(texts, {
        color: "",
        fontWeight: "",
        duration: 0.8,
        ease: "power3.inOut",
      });
    });
  });
}
teamAnimation();





function TextAnimation() {
    empty = "";
    document.querySelector(".paragh")
        .textContent.split(" ")
        .forEach(function (elems) {
            if (elems === " ") empty += `<span>&nbsp</span> `
            empty += `<span>${elems}</span> `
        })
    document.querySelector(".paragh").innerHTML = empty;
    gsap.set(".paragh span", { opacity: .1 })
    gsap.to(".paragh span", {
        scrollTrigger: {
            trigger: ".review",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        duration: .5,
        stagger: 0.03,
        ease: "power7"
    });


    empty = "";
    document.querySelector(".paraghe")
        .textContent.split(" ")
        .forEach(function (elems) {
            if (elems === " ") empty += `<span>&nbsp</span> `
            empty += `<span>${elems}</span> `
        })
    document.querySelector(".paraghe").innerHTML = empty;
    gsap.set(".paraghe span", { opacity: .1 })
    gsap.to(".paraghe span", {
        scrollTrigger: {
            trigger: ".reviewe",
            start: "top 70%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        duration: 2,
        stagger: 0.03,
        ease: "power7"
    });


}
TextAnimation();

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function capsule() {
    let tm = gsap.timeline({
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 3,
        },
    })

    tm.to(".capsuley", {
        bottom: '4%',
        ease: "power4",
        stagger: 0.3,
    }, 'a')
        .to(".capsulet", {
            bottom: '2%',
            ease: "power4",
            stagger: 0.3,
        }, 'a')
}
capsule();


function theme() {
    document.querySelectorAll(".section").forEach(function (elems) {
    ScrollTrigger.create({
        trigger: elems,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
        onEnter: function () {
            document.body.setAttribute("theme", elems.getAttribute("data-color"));
        },
        onEnterBack: function () {
            document.body.setAttribute("theme", elems.getAttribute("data-color"));
         }

    })
})
}
theme();



gsap.registerPlugin(ScrollTrigger);
function bubbleScrollAnimation() {
  document.querySelectorAll(".imgs, .pic, .image").forEach((img, i) => {
    let randomY = gsap.utils.random(80, 150);
    let randomX = gsap.utils.random(60, 120);

    // scroll based movement -> updates scrollX / scrollY
    gsap.to(img, {
      "--scrollY": i % 2 === 0 ? `${randomY}px` : `-${randomY}px`,
      "--scrollX": i % 2 === 0 ? `${randomX}px` : `-${randomX}px`,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ".page-3",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    // bubble floating -> updates floatX / floatY
    gsap.to(img, {
      "--floatY": "20px",
      "--floatX": "10px",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
}
bubbleScrollAnimation();





gsap.registerPlugin(ScrollTrigger);

// Page reload par initial state set karo (sab hidden)
gsap.set(".welcome-text span, .rome-text span", { 
  y: 120, 
  opacity: 0 
});

// Animate "Welcome to"
gsap.to(".welcome-text span", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power4.out",
  stagger: 0.06,
  delay: 0.3, // reload ke baad thoda wait kare
});

// Animate "ROME"
gsap.to(".rome-text span", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.08,
  delay: 0.8, // thoda baad me aaye
});

// Scroll par fade-out (jaldi aur smooth)
gsap.to(".welcome-text, .rome-text", {
  scrollTrigger: {
    trigger: ".video",
    start: "top center",   // jald trigger
    end: "bottom top",
    scrub: 1,
  },
  opacity: 0,
  y: -100,
  ease: "power2.inOut"
});




//gsap.registerPlugin(ScrollTrigger);

gsap.from("#sqdr", {
  scrollTrigger: {
    trigger: ".video",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  opacity: 0,
  scale: 0.6,
  y: -100,
  duration: 2,
  ease: "power4.out"
});

gsap.to("#sqdr", {
  scrollTrigger: {
    trigger: ".video",
    start: "center center"
  },
  textShadow: "0 0 15px rgba(200,0,0,0.8), 0 0 35px rgba(255,50,50,0.8)",
  repeat: -1,
  yoyo: true,
  duration: 2
});



gsap.registerPlugin(ScrollTrigger);

const imgs = document.querySelectorAll(".layer-img");

imgs.forEach((img, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: `${i * 25}% center`,   // har img 25% scroll par
      end: `${(i + 1) * 25}% center`,
      scrub: true
    }
  });

  // Entry (bottom se aana + fade in)
  tl.fromTo(img,
    { y: "50%", opacity: 0, scale: 1 },
    { y: "0%", opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
  );

  // Exit (chhota hote hote gayab)
  tl.to(img,
    { scale: 0.7, opacity: 0, duration: 0.5, ease: "power3.in" }
  );
});





 gsap.registerPlugin(ScrollTrigger);

  // --------- Audio setup ----------
  const bgMusic = new Audio("Married.mp3"); // please ensure path is correct
  bgMusic.loop = true;
  bgMusic.volume = 0.35;
  let musicStarted = false;

  // Only start on first user scroll / touch (mobile)
  function tryStartMusic() {
    if (musicStarted) return;
    musicStarted = true;
    bgMusic.play().then(() => {
      console.log("Background music started by scroll/touch.");
    }).catch(err => {
      console.warn("Autoplay blocked — showing enable-sound fallback.", err);
      showEnableSoundFallback();
    });
  }

  // Fallback button in case browser still blocks autoplay
  function showEnableSoundFallback() {
    if (document.getElementById("enable-sound")) return;
    const btn = document.createElement("button");
    btn.id = "enable-sound";
    btn.textContent = "Enable sound";
    Object.assign(btn.style, {
      position: "fixed",
      right: "18px",
      bottom: "18px",
      zIndex: 99999,
      padding: "10px 14px",
      borderRadius: "10px",
      background: "rgba(0,0,0,0.75)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.08)",
      cursor: "pointer",
      fontSize: "14px",
      backdropFilter: "blur(4px)"
    });
    document.body.appendChild(btn);
    btn.addEventListener("click", async () => {
      try {
        await bgMusic.play();
        btn.remove();
      } catch (e) {
        console.warn("Still blocked:", e);
      }
    });
  }

  // Listen for wheel (desktop) and touchstart (mobile). Once only.
  window.addEventListener("wheel", tryStartMusic, { once: true, passive: true });
  window.addEventListener("touchstart", tryStartMusic, { once: true, passive: true });

  // Optional: if you want a fallback when the user scrolls the container instead of window,
  // add same listener to that container element.

  // --------- GSAP text animations (targeted — won't affect all h1) ----------
  window.addEventListener("load", () => {
    // Ensure ScrollTrigger calculates fresh positions
    ScrollTrigger.refresh();

    // Welcome text: animate each <span> (you already have spans in markup)
    gsap.set(".welcome-text span", { y: 40, opacity: 0 });
    gsap.to(".welcome-text span", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.4
    });

    // ROME big text: slightly slower, staggered
    gsap.set(".rome-text span", { y: 60, opacity: 0 });
    gsap.to(".rome-text span", {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.8
    });

    
    if (document.querySelector("#sqdr")) {
      gsap.fromTo("#sqdr", {
        scale: 0.8,
        opacity: 0.0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".video",
          start: "top center",
          end: "bottom top",
          scrub: 0.8,
        }
      });
    }
  });