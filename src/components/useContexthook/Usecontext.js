import React, { createContext } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const Firstname = createContext()
export const Lastname = createContext()
export const Age = createContext()

    const Usecontext = () => {

        return (
            <div>
                {/* <h1>yfgy</h1> */}
                <Firstname.Provider value={"Moin"}>
                    <Lastname.Provider value={"Rangrej"}>
                        <Age.Provider value={18}>
                            <ComA />
                            <ComB />
                        </Age.Provider>
                    </Lastname.Provider>
                </Firstname.Provider>
            </div>
        )
    }

export default Usecontext;
// export {Firstname}
