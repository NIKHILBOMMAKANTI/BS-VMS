"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
export default function BenchForm() {
    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-5xl mx-auto space-y-6">
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Employee Details</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Label className="pb-2">First Name</Label>
                                <Input />
                            </div>
                            <div>
                                <Label className="pb-2">Middle Name</Label>
                                <Input />
                            </div>
                            <div>
                                <Label className="pb-2">Last Name</Label>
                                <Input />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="pb-2">Designation</Label>
                                <Input />
                            </div>
                            <div>
                                <Label className="pb-2">Industry</Label>
                                <Input />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="pb-2">Total Experience</Label>
                                <Input type="number" />
                            </div>
                            <div>
                                <Label className="pb-2">Relevant Experience</Label>
                                <Input type="number" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Skill Information</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-2">Skills</Label>
                            <Input />
                        </div>
                        <div>
                            <Label className="pb-2">Certifications</Label>
                            <Input />
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Availability</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-2">Bench Start</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label className="pb-2">Available From</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label className="pb-2">Type</Label>
                            <Select>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full">Full Time</SelectItem>
                                    <SelectItem value="part">Part Time</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="pb-2">Notice</Label>
                            <Input />
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Work Authorization</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between col-span-2">
                            <Label className="pb-2">Visa</Label>
                            <Switch />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Label className="pb-2">Start Date</Label>
                                <Input type="date" />
                            </div>
                            <div >
                                <Label className="pb-2">End Date</Label>
                                <Input type="date" />
                            </div>
                            <div >
                                <Label className="pb-2">Work Type</Label>
                                <Select>
                                    <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="w2">W2</SelectItem>
                                        <SelectItem value="c2c">Contract</SelectItem>
                                        <SelectItem value="1099">1099</SelectItem>
                                        <SelectItem value="1099">Contract to Contract</SelectItem>
                                        <SelectItem value="1099">to hire</SelectItem>
                                        <SelectItem value="1099">W2 Contract</SelectItem>
                                        <SelectItem value="1099">Remote within US</SelectItem>
                                        <SelectItem value="1099">Remote any Where</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Work Preferences</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                        <div>
                            <Label className="pb-2">Mode</Label>
                            <Select>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="remote">Remote</SelectItem>
                                    <SelectItem value="hybrid">Hybrid</SelectItem>
                                    <SelectItem value="onsite">Onsite</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="pb-2">Location</Label>
                            <Input />
                        </div>
                        <div>
                            <Label className="pb-2">Relocate</Label>
                            <Select>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Billing Details</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                        <div>
                            <Label className="pb-2">Hourly Rate</Label>
                            <Input />
                        </div>
                        <div>
                            <Label className="pb-2">Currency</Label>
                            <Select>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Select" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="pb-2">Duration</Label>
                            <Input />
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-2">Resume</Label>
                            <Input type="file" />
                        </div>
                        <div>
                            <Label className="pb-2">Profile Link</Label>
                            <Input />
                        </div>
                        <div className="col-span-2">
                            <Label className="pb-2">Summary</Label>
                            <Textarea />
                        </div>
                    </CardContent>
                </Card>
                {/* <Card className="rounded-xl shadow-sm">
                    <CardHeader><CardTitle>AI / Search</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="pb-2">Keywords</Label>
                            <Input />
                        </div>
                        <div>
                            <Label className="pb-2">Domain</Label>
                            <Input />
                        </div>
                        <div className="col-span-2">
                            <Label className="pb-2">Projects</Label>
                            <Textarea />
                        </div>
                    </CardContent>
                </Card> */}
                <div className="flex justify-end">
                    <Button>Create Bench</Button>
                </div>
            </div>
        </div>
    );
}
