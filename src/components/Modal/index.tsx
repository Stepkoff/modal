import React, {useEffect} from 'react';
import s from './modal.module.scss';

interface IModalProps {
  children: React.ReactNode
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal:React.FC<IModalProps> = ({children, active, setActive}) => {
  useEffect(() => {
    active ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
  }, [active])
  const closeModal = () => {
    setActive(false);
  }
  return (
    <div className={active ? `${s.modal} ${s.active}`: s.modal} onClick={closeModal}>
      <div className={active ? `${s.modal__content} ${s.activeContent}`: s.modal__content} onClick={e => e.stopPropagation()}>
        <div className={s.closeBtn} onClick={closeModal}></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;