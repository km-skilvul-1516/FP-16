import React from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Form from '../components/Form'

const Login = () => {
    return (
        <div>
            <div className="px-8 pt-12">
                <div className="text-xl font-bold">Masuk</div>
                <div className="pt-12">
                    <div className="font-bold">
                        Email
                    </div>
                    <Form />
                </div>
                <div className="pt-3">
                    <div className="font-bold">
                        Kata Sandi
                    </div>
                    <Form />
                </div>
                <div className="pt-2 flex justify-between items-center">
                    <Checkbox title="Ingat Password" />
                    <div className="text-sm text-blue-500">
                        Lupa Password?
                    </div>
                </div>
                <div className="pt-8 w-full">
                    <Button title="Login" />
                </div>
                <div className="pt-8 text-center text-sm">
                    atau
                </div>
                <div className="pt-8 w-full">
                    <Button title="Login dengan Google" />
                </div>
            </div>
        </div>
    )
}

export default Login
