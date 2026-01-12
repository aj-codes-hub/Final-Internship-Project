import React, { useEffect, useState } from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

interface InputProps {
    Title: string
    Type: string
    Name: string
    PlaceHolder?: string
    className?: string
    PasswordEye?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error?: string  // ✅ Add error prop
}

const Input: React.FC<InputProps> = ({
    Title, 
    Type, 
    Name, 
    PlaceHolder, 
    className, 
    PasswordEye,
    value = '',
    onChange,
    onKeyPress,
    error  // ✅ Add error prop
}) => {

    const [isShow, setIsShow] = useState(false)
    const [passEye, setPassEye] = useState(false)
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        if (PasswordEye !== undefined) {
            setPassEye(PasswordEye)
        }
    }, [PasswordEye])

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const HandleShowPassword = () => {
        setIsShow(!isShow)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInputValue(newValue)
        
        if (onChange) {
            onChange(e)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyPress) {
            onKeyPress(e)
        }
    }

    // Dynamic border color based on error
    const getBorderColor = () => {
        return error ? 'border-red-500 focus:border-red-500' : 'border-[#5C6272] focus:border-[#33D6FF]'
    }

    // Dynamic title color based on error
    const getTitleColor = () => {
        return error ? 'text-red-400' : 'text-[#5C6272]'
    }

    // Dynamic icon color based on error
    const getIconColor = () => {
        return error ? 'text-red-400 hover:text-red-300' : 'text-[#5C6272] hover:text-white'
    }

    return (
        <div className={`relative ${className}`}>
            {/* Title with dynamic color */}
            <p className={`text-[16px] font-medium my-[8px] ${getTitleColor()}`}>
                {Title}
            </p>
            
            <div className="relative">
                <input 
                    type={isShow ? "text" : Type}
                    name={Name}
                    placeholder={PlaceHolder}
                    className={`
                        w-full h-[48px] rounded-[10px] bg-transparent border 
                        text-white p-[15px] outline-none focus:outline-none 
                        transition-colors focus:bg-[#040914]
                        ${getBorderColor()}
                    `}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />

                {/* Password Eye Button with dynamic color */}
                <button 
                    onClick={HandleShowPassword}
                    type="button"
                    className={`
                        absolute right-[15px] top-1/2 transform -translate-y-1/2 
                        text-[18px] cursor-pointer transition-colors
                        ${getIconColor()}
                        ${passEye ? "block" : "hidden"}
                    `}
                >
                    {isShow ? <IoEye /> : <FaEyeSlash />}
                </button>
            </div>

            {/* Error message */}
            {error && (
                <p className="text-red-400 text-sm mt-1 ml-1">
                    {error}
                </p>
            )}
        </div>
    )
}

export default Input