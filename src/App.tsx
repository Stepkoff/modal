import React, {useState} from 'react';
import s from './App.module.scss';
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={s.App}>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cupiditate deleniti deserunt, distinctio eligendi impedit magni nesciunt non nulla placeat porro, recusandae sequi sunt tempore totam velit veniam voluptas?</p>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal active={modalOpen} setActive={setModalOpen}>
        <h1>hello modal</h1>
      </Modal>
    </div>
  );
}

export default App;
