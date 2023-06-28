// khi khong co ham nao can duoc xu ly trong hooks,
//hooks duoc su dung de tao useFocus voi muc dich :
// nhuong luong cho tac vu khac quan trong hon chay truoc khi hanh dong focus xay ra

import { useEffect, useState } from "react";

export const useFocus = () => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFocus(true);
    }, 0);
  }, []);
  return { focus, setFocus };
};
