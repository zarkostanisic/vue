<template>
	<div>
		<table v-if="messages.length > 0" class="table table-inbox table-hover">
			<tbody>
				<tr v-for="message in messages" :class="{ unread: typeof message.isRead !== 'undefined' && !message.isRead }">
					<td><input type="checkbox"></td>
					<td>
						<a href="">
							<i class="fa fa-star" v-if="typeof message.isImportant !== 'undefined'"></i>
						</a>
						<td>{{ message.from.email }}</td>
						<td>{{ message.subject }}</td>
						<td><i v-if="message.attachments.length > 0 " class="fa fa-paperclip"></i></td>
						<td class="text-right">{{ message.date.fromNow() }}</td>
					</td>
				</tr>
			</tbody>
		</table>

		<p v-else>No messages here jet!</p>
	</div>
</template>

<script>
	export default{
		props: {
			messages: {
				type: Array,
				required: true
			}
		},
		created(){
			console.log(this.messages[0].subject);
		}
	}
</script>