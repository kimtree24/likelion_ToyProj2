import { postData } from "./api";

const ModalAdd = (initialContent) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modalContainer">
            <div>추가정보 입력해주세요</div>
            <input type="text" placeholder="제목 입력해주세요!!" class="addTitle" />
            <input type="text" placeholder="작성자 입력해주세요!!" class="addAuthor" />
            <input type="password" placeholder="비밀번호 입력해주세요!!" class="addPasscode" />
            <br>
            <div class = "buttons">
                <button class="confirmAdd">입력</button>
                <button class="closeModal">닫기</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.confirmAdd').addEventListener('click', async () => {
        const title = modal.querySelector('.addTitle').value;
        const author = modal.querySelector('.addAuthor').value;
        const passcode = modal.querySelector('.addPasscode').value;
        await postData(title, author, initialContent, passcode);
        document.body.removeChild(modal);
        location.reload(); // 데이터를 다시 불러오기 위해 페이지 새로고침
    });

    modal.querySelector('.closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
};

export { ModalAdd };