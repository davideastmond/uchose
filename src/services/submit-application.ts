import axios from "axios";

export async function submitApplication(data: { [keyof: string]: any }) {
  try {
    await axios({
      method: "POST",
      url: "https://www.example.com",
      data,
    });
  } catch (exception: any) {
    throw new Error(
      "We encountered an error when submitting the application, but this was likely expected"
    );
  }
}
