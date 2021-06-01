import {postData} from "../services/requests.service";

const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.svg',
        ok: 'assets/img/ok.svg',
        fail: 'assets/img/fail.svg',
    };

    const path = {
        designer: `assets/server.php`,
        question: `assets/question.php`
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
        upload.forEach(input => {
            input.previousElementSibling.textContent = 'Файл не выбран'
        })
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';

            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;

            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 3000)
                })
        })
    })
}

export default forms;