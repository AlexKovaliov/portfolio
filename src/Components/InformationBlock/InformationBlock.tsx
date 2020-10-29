import React from 'react';
import {Title} from "../../common/generalComponents/Title/Title";
import s from "./InformationBlock.module.css"
import styleContainer from "../../common/styles/Container.module.css";
import {Info} from "./Info/Info";


export function InformationBlock() {
    return (
        <div className={s.informationBlock}>
            <div className={`${styleContainer.container} ${s.informationContainer}`}>
                <Title text={"About me"}/>
                <div className={s.row}>
                    <div className={s.column}>
                        <Info InfoTitle={"Hi!"}
                              InfoData={"I have been working as Frontend/React developer a half year.\n" +
                              "I’m most passionate about developing new and interesting projects,\n" +
                              "I'm hardworking and good a team player, so my goal is to work in a cool and experienced team.\n" +
                              "I study English and am constantly engaged in self-education.\n" +
                              "Ready to relocation."}/>
                              <button className={s.but}>Download my CV</button>
                        <div className={s.column}>
                            <Info InfoTitle={"Birthday"} InfoData={"2th january 1991"}/>
                            <Info InfoTitle={"Age"} InfoData={"29 Yr"}/>
                            <Info InfoTitle={"Location"} InfoData={"Mogilev | Minsk"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}