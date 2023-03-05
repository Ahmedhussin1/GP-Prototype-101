import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
function Examples() {
	return (
		<div className="flex w-full border-2 border-gray-200 rounded-md">
			<div className="flex flex-col divide-y-2  w-full ">
				<div className="flex flex-col divide-y-2 ">
					<div className="flex justify-between items-center px-2">
						<span className="text-xl font-bold py-1">Input</span>
						<CopyToClipboard text="125">
							<span className="py-px px-1 rounded-md bg-gray-200 text-black font-bold cursor-pointer">Copy</span>
						</CopyToClipboard>
					</div>
					<span className="bg-gray-200 px-2 py-1 text-rose-800 font-bold text-lg">125</span>
				</div>
				<div className="flex flex-col divide-y-2 ">
					<div className="flex justify-between items-center px-2">
						<span className="text-xl font-bold py-1">Output</span>
						<CopyToClipboard text="5">
							<span className="py-px px-1 rounded-md bg-gray-200 text-black font-bold cursor-pointer">Copy</span>
						</CopyToClipboard>
					</div>
					<span className="bg-gray-200 px-2 py-1 text-rose-800 font-bold text-lg">
						5 <br />
						213 <br />
						12323 <br />
						513123213
					</span>
				</div>
			</div>
		</div>
	)
}

export default Examples
