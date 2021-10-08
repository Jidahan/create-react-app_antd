import React from 'react'
import './modal.css'

function modal() {

  return (
    <div>
      <label for="modal_1" class="button">显示模态框</label>

      <div class="modal">
        <input type="checkbox" name="" id="modal_1"/>
        <label for="modal_1" class="overlay"></label>
        <div class="main">
          <p>
            We have a special offer for you. I am sure you will love it! However this does look spammy...
          </p>
        </div>
      </div>
    </div>
  );
}

export default modal;
