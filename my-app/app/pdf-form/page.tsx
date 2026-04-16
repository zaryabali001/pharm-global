'use client';

export default function PdfForm() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden">
      <div className="p-2 md:p-4 bg-white border-b flex items-center justify-between flex-shrink-0">
        <h1 className="text-lg md:text-2xl font-semibold">Your Fillable PDF Form</h1>
        <p className="text-xs md:text-sm text-gray-600">Fill the form directly below</p>
      </div>

      <div className="flex-1 overflow-auto">
        <iframe
          src="/Suspected-Adverse-Reaction-Reporting-Form-for-Health-Care-Professionals.pdf#toolbar=0&navpanes=0&scrollbar=1"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 80px)', minHeight: '600px' }}
          title="Interactive PDF Form"
        />
      </div>
    </div>
  );
}