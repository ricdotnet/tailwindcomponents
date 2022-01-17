import { useEffect, useState } from 'react';
import { ToastsComponent } from '../Components/ToastsComponent';
import { Layout } from '../Layouts/Layout';
import { Toast } from '../TestComponents/Toast';

interface IToast {
  text: string;
  date: number;
}

export function Toasts() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const ts: IToast = {
    text: Date.now().toString(),
    date: Date.now(),
  }
  function addToast() {
    const newToasts = [...toasts, ts];
    if (newToasts.length > 5) {
      newToasts.shift();
    }
    setToasts(newToasts);
  }
  function removeToast(date: number) {
    const newToasts = toasts.filter(t => t.date !== date);
    setToasts(newToasts);
    // console.log(date);
  }

  return (
    <Layout>
      <button onClick={addToast}>Add Toast</button>

      <ToastsComponent />

      <div className="fixed bottom-10 left-10 flex flex-col space-y-2">
        {toasts.map((t: IToast) => (
          <Toast key={t.date} text={t.text} handleToastRemove={() => removeToast(t.date)} />
        ))}
        {/* <Toast text="hi there" /> */}
      </div>
    </Layout>
  );
}
