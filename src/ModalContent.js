const ModalContent = (content) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
      <div class="modalContainer">
          <div>${content}</div>
          <br>
          <br>
          <button class="closeModal">닫기</button>
      </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.closeModal').addEventListener('click', () => {
      document.body.removeChild(modal);
  });
};

export { ModalContent };