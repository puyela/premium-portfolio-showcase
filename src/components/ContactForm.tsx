import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "isaaccletus52@gmail.com",
		href: "mailto:isaaccletus52@gmail.com",
	},
	{ icon: MapPin, label: "Location", value: "Abuja, Nigeria" },
	{
		icon: Phone,
		label: "Phone",
		value: "+234 (805) 406-4744",
		href: "tel:+2348054064744",
	},
];

export function ContactForm() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (!res.ok) throw new Error("Failed to send");

			toast({
				title: "Message sent!",
				description: "Thank you for reaching out. I'll get back to you soon.",
			});
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (err) {
			toast({
				title: "Error",
				description: "Something went wrong. Please try again later.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="py-24 bg-secondary/30">
			<div className="container mx-auto px-6">
				<div className="text-center space-y-4 mb-16">
					<p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
						Get in Touch
					</p>
					<h2 className="text-3xl md:text-4xl font-bold">
						Let's Work Together
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Having a project in mind? I'd love to hear about it. Drop me a message
						and let's create something amazing.
					</p>
				</div>

				<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
					{/* Contact Info */}
					<div className="lg:col-span-2 space-y-8">
						<div className="space-y-6">
							{contactInfo.map((item) => (
								<div key={item.label} className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
										<item.icon className="text-accent" size={20} />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											{item.label}
										</p>
										{item.href ? (
											<a
												href={item.href}
												className="font-medium hover:text-accent transition-colors"
											>
												{item.value}
											</a>
										) : (
											<p className="font-medium">{item.value}</p>
										)}
									</div>
								</div>
							))}
						</div>

						<div className="p-6 bg-card rounded-lg border border-border">
							<h3 className="font-semibold mb-2">Available for freelance</h3>
							<p className="text-sm text-muted-foreground">
								I'm currently taking on new projects. Let's discuss how I can help
								bring your vision to life.
							</p>
						</div>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className="lg:col-span-3 space-y-6"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Name
								</label>
								<Input
									id="name"
									name="name"
									placeholder="Your name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="your@email.com"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="subject" className="text-sm font-medium">
								Subject
							</label>
							<Input
								id="subject"
								name="subject"
								placeholder="What's this about?"
								value={formData.subject}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="message" className="text-sm font-medium">
								Message
							</label>
							<Textarea
								id="message"
								name="message"
								placeholder="Tell me about your project..."
								rows={6}
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>
						<Button
							type="submit"
							variant="hero"
							size="lg"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
							<Send size={18} />
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
