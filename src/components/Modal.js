"use client"
import { useState, useEffect } from 'react';

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.getElementById('my_modal_1').showModal();
        } else {
            document.getElementById('my_modal_1').close();
        }
    }, [showModal]);

    return (
        <div>
            <button className="btn" onClick={() => setShowModal(true)}>Open Modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={() => setShowModal(false)}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
