import React from 'react';
import { FloatButton } from 'antd';
import { AiOutlineQuestion } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';

function FloatBtn() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 27,
        }}
        icon={<AiOutlineQuestion />}
      >
        <FloatButton icon={<IoIosArrowUp />} onClick={scrollToTop} />
        <FloatButton icon={<AiOutlineMessage />} />
      </FloatButton.Group>
    </>
  );
}

export default FloatBtn;
