import React from 'react'

function Header() {
    return (
        <>
            <h1 className='text-5xl text-center py-5 text-blue-700 font-semibold'>Hello</h1>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
                <div className="shrink-0">
                    <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                    
                </div>
                
            </div>
            <hr />
                    <button className='text-xl bg-blue-500 hover:bg-blue-700 py-2 px-5 mt-5 mx-auto block  active:bg-blue-900 text-white rounded-md'>Click Me</button>
        </>
    )
}

export default Header