import React, { ReactNode } from 'react';
import s from './Modal.module.css';


interface MyModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MyModal: React.FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [s.myModal];
  if (visible) {
    rootClasses.push(s.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={s.myModalContent} onClick={(event => event.stopPropagation())}>
        {children}
      </div>
    </div>
  );
};
export default MyModal;
