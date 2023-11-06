import { useState, useCallback } from 'react';
import Toast from 'src/components/Toast';

type ToastStyle = {
  background: string;
  point: string;
};

export function useToast() {
  const [toastContents, setToastContents] = useState('');
  const [toastStyle, setToastStyle] = useState<ToastStyle | undefined>(
    undefined,
  );
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (
    contents: string,
    style?: { background: string; point: string },
  ) => {
    setToastContents(contents);
    setToastStyle(style);
    setToastVisible(true);
  };
  const hideToast = () => {
    setToastVisible(false);
  };

  const ToastContainer = useCallback(() => {
    return (
      <>
        {toastVisible && (
          <Toast
            contents={toastContents}
            style={toastStyle}
            onClose={hideToast}
          />
        )}
      </>
    );
  }, [toastVisible]);

  return { toast: showToast, Toast: ToastContainer };
}
