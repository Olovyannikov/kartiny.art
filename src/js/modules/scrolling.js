const scrolling = (upSelector) => {
    const upElement = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.add('animated', 'fadeIn');
            upElement.classList.remove('fadeOut');
        } else {
            upElement.classList.remove('fadeIn');
            upElement.classList.add('fadeOut');
        }
    });

    // Scrolling with RAF

    let links = document.querySelectorAll('[href^="#"]');
    let speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) :
                    Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r !== widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


    /* Pure Js Scrolling

    const element = document.documentElement;
    const body = document.body;

    const calcScroll = () => {
        upElement.addEventListener('click', function (e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(this.hash);
                let hashElementTop = 0;

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);

                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    }

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1;
        let prevScrollTop;
        let speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    }

    calcScroll(); */
}

export default scrolling;