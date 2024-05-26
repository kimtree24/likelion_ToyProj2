import { deleteData } from "./api";

const ModalDel = (id) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modalContainer">
            <div>삭제하려면 비밀번호를 입력해주세요</div>
            <input type="password" placeholder="비밀번호 입력해주세요!!" class="delPasscode" />
            <br>
            <div class = "buttons">
                <button class="confirmDelete">입력</button>
                <button class="closeModal">닫기</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.confirmDelete').addEventListener('click', async () => {
        const passcode = modal.querySelector('.delPasscode').value;
        await deleteData(id, passcode);
        document.body.removeChild(modal);
        location.reload(); // 데이터를 다시 불러오기 위해 페이지 새로고침
    });

    modal.querySelector('.closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
};

export { ModalDel };