import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import CardAndDeck from "./CardAndDeck";

const mockRoom = {
	image: "https://example.com/room.jpg",
	name: "Deluxe Room",
	description: "Una habitación espaciosa y cómoda.",
};

const mockPrice = 120;
const mockCheckIn = "2025-03-01";
const mockCheckOut = "2025-03-05";
const mockOnCancel = vi.fn();

describe("CardAndDeck Component", () => {
	test("should render room details correctly", () => {
		render(
			<CardAndDeck
				room={mockRoom}
				price={mockPrice}
				checkIn={mockCheckIn}
				checkOut={mockCheckOut}
				onCancel={mockOnCancel}
			/>
		);

		expect(screen.getByText(/Habitación Deluxe Room/i)).toBeInTheDocument();
		expect(
			screen.getByText(/Una habitación espaciosa y cómoda./i)
		).toBeInTheDocument();

		const checkInContainer = screen.getByText(/Check-in:/i).parentElement;
		expect(checkInContainer).toHaveTextContent(`Check-in: ${mockCheckIn}`);

		const checkOutContainer = screen.getByText(/Check-out:/i).parentElement;
		expect(checkOutContainer).toHaveTextContent(
			`Check-out: ${mockCheckOut}`
		);

		expect(screen.getByText(`${mockPrice} €`)).toBeInTheDocument();
	});

	test("should call onCancel when the cancel button is clicked", () => {
		render(
			<CardAndDeck
				room={mockRoom}
				price={mockPrice}
				checkIn={mockCheckIn}
				checkOut={mockCheckOut}
				onCancel={mockOnCancel}
			/>
		);

		fireEvent.click(screen.getByText(/Cancelar/i));
		expect(mockOnCancel).toHaveBeenCalledTimes(1);
	});

	test("should render the room image correctly", () => {
		render(
			<CardAndDeck
				room={mockRoom}
				price={mockPrice}
				checkIn={mockCheckIn}
				checkOut={mockCheckOut}
				onCancel={mockOnCancel}
			/>
		);

		const roomImage = screen.getByAltText(`Habitación ${mockRoom.name}`);
		expect(roomImage).toBeInTheDocument();
		expect(roomImage).toHaveAttribute("src", mockRoom.image);
	});
});
