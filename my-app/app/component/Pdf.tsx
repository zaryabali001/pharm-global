'use client';

export default function PdfForm() {
  return (
   <div className="flex-1 bg-white p-4 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-5xl h-full">
          <iframe
            src="/Suspected-Adverse-Reaction-Reporting-Form-for-Health-Care-Professionals.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            className="w-full h-80 md:h-96 lg:h-1000 border-0 shadow-lg"
            style={{ 
              backgroundColor: 'white',
              minHeight: 'auto'
            }}
            title="Adverse Reaction Reporting Form"
          />
        </div>
      </div>
  );
}

