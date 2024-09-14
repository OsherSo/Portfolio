import { Loader2, Send } from "lucide-react";

const SubmitButton = ({ isSubmitting, isValid }) => (
  <button
    type="submit"
    disabled={!isValid || isSubmitting}
    className="w-full px-4 py-2 text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
  >
    {isSubmitting ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </>
    )}
  </button>
);

export default SubmitButton;
