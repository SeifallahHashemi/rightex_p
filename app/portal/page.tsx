"use client";
import React, { useRef, useState } from "react";
import RadioButton from "@/app/components/RadioButton/radio-button";
import Modal from "@/app/components/Modal/modal";
import {useDebounce} from "use-debounce";
import Monitor from "@/app/components/monitoring/monitor";

const Page = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [text, setText] = useState<string>("");
  const [value] = useDebounce(text, 500);
  const InputRef = useRef<any>(null);
  const InputRefTwo = useRef<any>(null);
  const InputRefThree = useRef<any>(null);
  const [checkedInput, setCheckedInput] = useState<{
    rightec?: boolean;
    rightec2?: boolean;
    rightec3?: boolean;
  }>({});
  const [toggleMessage, setToggleMessage] = useState<boolean>(false)
  // console.log(Object.keys(checkedInput).length > 0)
  const toggleMessageHandler = () => {
    if (Object.keys(checkedInput).length > 0) {
      setToggleMessage(prevState => !prevState);
      return
    }
    setToggleModal(true)
  }
  const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
  }
  console.log(text)
  return (
    <section>
      <div className={"space-x-2"}>
        <RadioButton
          ref={InputRef}
          name={"rightec"}
          value={"rightec"}
          id={"rightec1"}
          setCheckedInput={setCheckedInput}
        />
        <RadioButton
          ref={InputRefTwo}
          name={"rightec"}
          value={"rightec2"}
          id={"rightec2"}
          setCheckedInput={setCheckedInput}
        />
        <RadioButton
          ref={InputRefThree}
          name={"rightec"}
          value={"rightec3"}
          id={"rightec3"}
          setCheckedInput={setCheckedInput}
        />
      </div>
      <div className={"flex flex-col"}>
        <button
          className={
            "self-end px-2 py-1 border border-amber-600 rounded hover:bg-amber-300 transition-all"
          }
          onClick={toggleMessageHandler}
        >
          پیام جدید
        </button>
        {toggleMessage && (
          <textarea
            className={
              "outline-0 resize-none w-[10rem] self-end text-stone-900"
            }
            dir={"rtl"}
            rows={5}
            onChange={textChangeHandler}
          />
        )}
      </div>
      {toggleModal && <Modal setToggleModal={setToggleModal} modalState={toggleModal}/>}
      <Monitor text={value}/>
    </section>
  );
};

export default Page;