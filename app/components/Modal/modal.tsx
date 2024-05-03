"use client";

import { Button, Modal as Modally } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import React from 'react';

interface ModalProps {
    setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
    modalState: boolean;
}

const Modal: React.FC<ModalProps> = ({ setToggleModal,modalState }) => {
    return (
        <>
            <Modally show={modalState} size="md" onClose={() => setToggleModal(false)} popup>
                <Modally.Header />
                <Modally.Body>
                    <div className="text-center ">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            لطفا یک گزینه را انتخاب فرمایید
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className={"px-2 py-1 rounded hover:bg-teal-700"} color="green" onClick={() => setToggleModal(false)}>
                                متوجه شدم
                            </Button>
                            {/*<Button color="gray" onClick={() => setToggleModal(false)}>
                                No, cancel
                            </Button>*/}
                        </div>
                    </div>
                </Modally.Body>
            </Modally>
            {/* Your modal content */}
        </>
    );
};

export default Modal;
