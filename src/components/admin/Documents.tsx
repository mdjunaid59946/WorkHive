import React, { useState } from 'react';
import { FileText, FileSpreadsheet, File } from 'lucide-react';
import { BackButton } from '../BackButton';

const documentCategories = [
  {
    id: 'hr',
    title: 'Employee & HR Documents',
    icon: FileText,
    documents: [
      { name: 'Employee Records', type: 'folder' },
      { name: 'Attendance Records', type: 'spreadsheet' },
      { name: 'Payroll Documents', type: 'spreadsheet' },
      { name: 'Performance Reviews', type: 'document' },
    ],
  },
  {
    id: 'finance',
    title: 'Financial & Accounting',
    icon: FileSpreadsheet,
    documents: [
      { name: 'Invoices', type: 'folder' },
      { name: 'Tax Documents', type: 'folder' },
      { name: 'Budget Reports', type: 'spreadsheet' },
      { name: 'Financial Statements', type: 'spreadsheet' },
    ],
  },
  {
    id: 'admin',
    title: 'Office Administration',
    icon: File,
    documents: [
      { name: 'Office Supply Inventory', type: 'spreadsheet' },
      { name: 'IT Asset Records', type: 'spreadsheet' },
      { name: 'Maintenance Logs', type:  <boltAction type="file" filePath="src/components/admin/Documents.tsx">      { name: 'Maintenance Logs', type: 'document' },
      { name: 'Equipment Manuals', type: 'document' },
    ],
  },
];

export const Documents = () => {
  const [search, setSearch] = useState('');

  const filteredCategories = documentCategories.map(category => ({
    ...category,
    documents: category.documents.filter(doc =>
      doc.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Documents</h1>
        <input
          type="text"
          placeholder="Search documents..."
          className="px-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6">
        {filteredCategories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <category.icon className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  {doc.type === 'folder' ? (
                    <FileText className="h-5 w-5 text-yellow-500" />
                  ) : doc.type === 'spreadsheet' ? (
                    <FileSpreadsheet className="h-5 w-5 text-green-500" />
                  ) : (
                    <File className="h-5 w-5 text-blue-500" />
                  )}
                  <span>{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};