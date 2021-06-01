import {getResource} from "../services/requests.service";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    /* Static

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    })


    <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <div class=styles-block>
                    <img src=assets/img/styles-4.jpg alt>
                    <h4>Ручкой</h4>
                    <a href="#">Подробнее</a>
                </div>
            </div>
     */

    /* Dynamic */

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="${title}"/>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        })
    }

    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();
    });
}

export default showMoreStyles;