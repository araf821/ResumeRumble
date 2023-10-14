import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const Rating = () => {
  return (
	<div>
		<div className="mx-8 my-5 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-5">
        <h1 className=" overflow-clip whitespace-nowrap text-xl font-bold">
          Resume rankings
        </h1>
        <h2 className="text-lg">See how you rank!</h2>
      </div>
		<div className="page-body flex flex-row wscreen justify-around">
			<div className="input box">
				<h2>job posting:</h2>
				<Textarea className='w-max' placeholder="<Paste job description here. If you’re interested in general feedback, leave this empty.>" />
			</div>
			<div className="resume sec">
				<h2>your resume:</h2>
				<div className="icon mt-3"></div>
					<div className=" mt-3 grid w-full max-w-sm items-center gap-1.5">
						<Input id="mt-3 picture" type="file" />
					</div>
				<Button>Submit</Button>
				<div className="submit button"></div>
			</div>
		</div>
	</div>
  )
}

export default Rating