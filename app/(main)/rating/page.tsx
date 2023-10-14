import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import FileUpload from '@/components/FileUpload'
import PDFViewer from '@/components/PDFViewer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

let submittedResume = true
const Rating = () => {
	if (submittedResume){
		return(
		//	<div className='grid grid-cols-1 md:grid-cols-2 text-white'>
			<div>
				<div className="mx-8 my-5 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-5">
				<h1 className=" overflow-clip whitespace-nowrap text-xl font-bold">
				Results:
				</h1>
				<h2 className="text-lg">Are you cooking!?</h2>
			</div>
			<div className='m-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-white'>
				<PDFViewer url='amongus'/>
				 <Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>Grammar: 5/5</AccordionTrigger>
					<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Action Verbs: 5/5</AccordionTrigger>
					<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Content: 5/5</AccordionTrigger>
					<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>(Optional) Keyword Matching: 5/5</AccordionTrigger>
					<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
					</AccordionContent>
				</AccordionItem>
				</Accordion>
			</div>
			</div>
		)
	}else{
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
				<h2 className='text-white'>job posting:</h2>
				<Textarea className='w-max' placeholder="<Paste job description here. If you’re interested in general feedback, leave this empty.>" />
			</div>
			<div className="resume sec">
				<h2 className='text-white'>your resume:</h2>
				<div className="icon my-3"></div>
					<div className=" mt-3 grid w-full max-w-sm items-center gap-1.5">
						<FileUpload/>
					</div>
				<Button className="icon my-3 bg-blue-500">Submit</Button>
				<div className="submit button"></div>
			</div>
		</div>
		
	</div>
  )
}}

export default Rating