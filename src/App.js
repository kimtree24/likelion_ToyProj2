import { fetchData, parsing } from './api';
import { ModalContent } from './ModalContent';
import { ModalDel } from './ModalDel';
import { ModalAdd } from './ModalAdd';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const createElement = (tag, className, content) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.textContent = content;
        return element;
    };

    const getData = async () => {
        const data = await fetchData();
        const listBox = document.querySelector('.listBox');

        data.forEach((input) => {
            const listItem = createElement('div', 'listItem');
            listItem.innerHTML = `
                <div>제목 : ${input.title} <br> 작성자 : ${input.author} <br> 날짜 : ${parsing(input.created_at)}</div>
                <div class = "buttons">
                <button class="contentButton">내용 보기</button>
                <button class="delButton">삭제</button>
                </div>
            `;
            listBox.appendChild(listItem);

            listItem.querySelector('.contentButton').addEventListener('click', () => {
                ModalContent(input.content);
            });

            listItem.querySelector('.delButton').addEventListener('click', () => {
                ModalDel(input.id);
            });
        });
    };

    root.innerHTML = `
        <div class="container">
            <div class="title">Visitor's Book</div>
            <div class="title">List</div>
            <div class="listBox"></div>
            <div class="title">Add</div>
            <div class="addBox">
                <textarea placeholder="방명록 작성해주세요!!" class="inputContent"></textarea>
                <button class="addInput">등록</button>
            </div>
        </div>
    `;

    document.querySelector('.addInput').addEventListener('click', () => {
        const newContent = document.querySelector('.inputContent').value;
        ModalAdd(newContent);
    });

    getData();
});