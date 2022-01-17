import { useState } from 'react';
import { Layout } from '../Layouts/Layout';
import { Modal } from '../Components/Modal';

export function Inputs() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col space-y-3">
          <input
            className="border border-slate-400 shadow-sm px-5 py-2 rounded-md outline-none"
            defaultValue="Normal input"
          />
          <input
            className="border border-slate-400 shadow-sm px-5 py-2 rounded-md disabled:bg-slate-200 disabled:text-slate-700"
            disabled={true}
            defaultValue="Disabled input"
          />
          <div>
            <button onClick={handleShowModal}>Show</button>
          </div>
        </div>
      </Layout>
      {showModal ? (
        <Modal doCloseModal={handleShowModal}>
          {'<input />'}
        </Modal>
      ) : null}
    </>
  );
}
