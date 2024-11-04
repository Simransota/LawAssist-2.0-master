"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Search } from "lucide-react";

export function RequestsPageComponent() {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date");

  type Request = {
    id: number;
    clientName: string;
    requestType: string;
    dateSubmitted: string;
    status: string;
    priority: string;
  };

  const requests = [
    {
      id: 1,
      clientName: "John Doe",
      requestType: "Consultation",
      dateSubmitted: "2023-05-15 10:30 AM",
      status: "Pending",
      priority: "Urgent",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      requestType: "Case Review",
      dateSubmitted: "2023-05-14 2:45 PM",
      status: "In Progress",
      priority: "Normal",
    },
    {
      id: 3,
      clientName: "Michael Johnson",
      requestType: "Contract Drafting",
      dateSubmitted: "2023-05-10 9:00 AM",
      status: "Open",
      priority: "High",
    },
    {
      id: 4,
      clientName: "Emily Davis",
      requestType: "Legal Consultation",
      dateSubmitted: "2023-05-11 11:15 AM",
      status: "Closed",
      priority: "Normal",
    },
    {
      id: 5,
      clientName: "Chris Brown",
      requestType: "Legal Advice",
      dateSubmitted: "2023-05-12 3:30 PM",
      status: "Archived",
      priority: "Low",
    },
    {
      id: 6,
      clientName: "Laura Wilson",
      requestType: "Case Review",
      dateSubmitted: "2023-05-09 4:10 PM",
      status: "Pending",
      priority: "Urgent",
    },
    {
      id: 7,
      clientName: "David Clark",
      requestType: "Consultation",
      dateSubmitted: "2023-05-13 5:50 PM",
      status: "Open",
      priority: "Normal",
    },
    {
      id: 8,
      clientName: "Sarah Lee",
      requestType: "Case Review",
      dateSubmitted: "2023-05-16 8:20 AM",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 9,
      clientName: "James Bond",
      requestType: "Consultation",
      dateSubmitted: "2023-05-17 9:00 AM",
      status: "Closed",
      priority: "Normal",
    },
    {
      id: 10,
      clientName: "Linda Taylor",
      requestType: "Contract Drafting",
      dateSubmitted: "2023-05-18 12:00 PM",
      status: "Archived",
      priority: "Low",
    },
  ];

  const filteredRequests = requests
    .filter((request) => {
      const search = searchTerm.toLowerCase();
      const isMatchingSearch =
        request.clientName.toLowerCase().includes(search) ||
        request.requestType.toLowerCase().includes(search);
      const isMatchingStatus =
        statusFilter === "all" || request.status.toLowerCase() === statusFilter;

      return isMatchingSearch && isMatchingStatus;
    })
    // Sorting the requests
    .sort((a, b) => {
      if (sortBy === "date") {
        return (
          new Date(b.dateSubmitted).getTime() -
          new Date(a.dateSubmitted).getTime()
        );
      } else if (sortBy === "priority") {
        const priorityOrder: Record<string, number> = {
          Urgent: 1,
          High: 2,
          Normal: 3,
          Low: 4,
        };
        return (
          priorityOrder[a.priority as keyof typeof priorityOrder] -
          priorityOrder[b.priority as keyof typeof priorityOrder]
        );
      }
      return 0;
    });

  return (
    <div className="container mx-auto p-4 space-y-6 ">
      <header className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Client Requests</h1>
          {/* <Button variant="outline" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
          </Button> */}
        </div>
        <div className="flex space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Client Name or Request Type"
              className="pl-8"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Requests</TabsTrigger>
          <TabsTrigger value="history">Request History</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Request Type</TableHead>
                <TableHead>Date & Time Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.clientName}</TableCell>
                  <TableCell>{request.requestType}</TableCell>
                  <TableCell>{request.dateSubmitted}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell>{request.priority}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedRequest(request)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Request Details</DialogTitle>
                        </DialogHeader>
                        {selectedRequest && (
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold">
                                Client Information
                              </h3>
                              <p>Name: {selectedRequest.clientName}</p>
                              <p>Phone: (555) 123-4567</p>
                              <p>Email: client@example.com</p>
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                Request Information
                              </h3>
                              <p>Type: {selectedRequest.requestType}</p>
                              <p>Status: {selectedRequest.status}</p>
                              <p>Priority: {selectedRequest.priority}</p>
                              <p>Submitted: {selectedRequest.dateSubmitted}</p>
                            </div>
                            <div className="col-span-2">
                              <h3 className="font-semibold">
                                Service Requested
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                            <div className="col-span-2">
                              <h3 className="font-semibold">Attachments</h3>
                              <Button variant="outline" className="mr-2">
                                Upload
                              </Button>
                              <Button variant="outline">Download</Button>
                            </div>
                            <div className="col-span-2">
                              <h3 className="font-semibold">Deadline</h3>
                              <p>May 30, 2023</p>
                            </div>
                            <div className="col-span-2">
                              <h3 className="font-semibold">Internal Notes</h3>
                              <Textarea
                                placeholder="Add your notes here..."
                                className="h-24"
                              />
                            </div>
                            <div className="col-span-2 flex justify-end space-x-2">
                              <Button variant="outline">Reject</Button>
                              <Button variant="outline">
                                Request More Info
                              </Button>
                              <a href="/chat">
                                <Button variant="outline">Accept</Button>
                              </a>
                              <Button>Mark as Completed</Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="history">
          <p>Completed requests will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
