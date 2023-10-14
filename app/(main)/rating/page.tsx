import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Rating = () => {
  return (
	<div>
		<div className="gradient header">
			<h1 className='text-xl'>Resume Rating</h1>
			<p>get your resume rated!</p>
		</div>
		<div className="page body">
			<div className="input box">
				<h2>job posting:</h2>
				<div className="inputbox"></div>
			</div>
			<div className="resume sec">
				<h2>your resume:</h2>
				<div className="icon"></div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="picture">Picture</Label>
						<Input id="picture" type="file" />
					</div>
				<Button>Submit Submit for rating</Button>
				<div className="submit button"></div>
			</div>
		</div>
	</div>


  )
}

export default Rating